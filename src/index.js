const fs = require('fs');
const path = require('path');
const del = require('del');
const sass = require('sass');
const ejs = require('ejs');
const fse = require('fs-extra');

const loadContact = require('./load/contact.js');
const loadEducation = require('./load/education.js');
const loadExperience = require('./load/experience.js');
const loadHistory = require('./load/history.js');
const loadOverview = require('./load/overview.js');
const loadProject = require('./load/project.js');
const loadSocialMedia = require('./load/social-media.js');

const main = async () => {
  const dist = path.resolve(process.cwd(), 'dist');
  if (fs.existsSync(dist)) {
    await del(dist);
    await fs.promises.mkdir(dist, {
      recursive: true,
    });
  }

  // TODO Await all data loading first.
  const data = {
    contact: await loadContact(),
    education: await loadEducation(),
    experience: await loadExperience(),
    history: await loadHistory(),
    overview: await loadOverview(),
    projects: await loadProject(),
    socialMedia: await loadSocialMedia(),
  };

  // TODO Determine theme to load using a config file.
  const themeName = 'joe-damore';
  const theme = require(path.join(__dirname, 'themes', themeName, 'index.js'));

  const style = sass.renderSync({
    file: theme.style,
  });

  const template = await fs.promises.readFile(theme.template, 'utf8');
  const html = ejs.render(template, data, {
    filename: theme.template
  });

  await fs.promises.writeFile(path.join(dist, 'style.css'), style.css, 'utf8');
  await fs.promises.writeFile(path.join(dist, 'index.html'), html, 'utf8');

  if (fs.existsSync(theme.resources)) {
    await fse.copy(theme.resources, path.join(dist, 'resources'));
  }
};

main();

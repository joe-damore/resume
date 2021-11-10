# Joe D'Amore's Resume
Data and generator for Joe D'Amore's resume

## Overview
This repository contains the data, generator code, and theme files needed to generate my resume.

## Requirements
In order to generate a resume, you must have the following software installed:

* Node.js
* Yarn 1.x

Before you can generate a resume, you must install Node packages:

```
$ yarn install
```

## Usage
To generate a resume, run the following command:

```
$ yarn build
```

The resume will be output to the `./dist` directory. To serve the generated resume, run the `serve` command:

```
$ yarn serve
```

The generated resume can be accessed at `localhost:8080` while the server is running.

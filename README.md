# grunt-fpm-package

> Triggers a [fpm](https://github.com/jordansissel/fpm) run

## Getting Started

**This plugin requires [fpm](https://github.com/jordansissel/fpm) installed.**

### Usage with ibldz

Add the following configuration to your build.json: 
```json
{
  "fpm": {
	"task": "fpm",
	"package": "grunt-fpm-package",
    "options": {
      "desc": "Task-specific options go here."
    },
    "your_target": {
      "desc": "Target-specific file lists and/or options go here."
    }
  },
};
```

### Usage with Grunt

This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-fpm-package --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-fpm-package');
```

## The "fpm" task

### Overview
In your project's Gruntfile, add a section named `fpm` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  fpm: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

All Options are passed to [fpm](https://github.com/jordansissel/fpm) as command line arguments. If you omnit the name, the name of the target will be used. 

### Targets

Each target has a src. The src are the source-folders that are passed to fpm

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever.

```json
{
	"create-deployable" : { 
		"fpm": {
			"options": {
                "s" : "dir",
                "t" : "deb",
                "version" : "1.0"
			},
			"my-package" : {
				"src" : ["src/"]
			}
		}
	}
}
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. 

To run the tests with itbldz

````shell
npm install itbldz -g
build-it
````

Or with grunt

````shell
npm install 
grunt
````
/* Gruntfile.js
 * @author Alexandre Jarnoux <alexandre.jarnoux@beesearch.fr>
 */
module.exports = function(grunt) {

	var _APP_NAME_ = "Bee Mobile";

	// Initial grunt configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		appDir: 'www',
		bowerDir: 'vendor',
		srcDir: 'src',

		// concatenate files
		concat: {
			app: {
				files: {
					'<%= appDir %>/js/app.js' : 		['<%= srcDir %>/app/app.js', '<%= srcDir %>/app/pg.js'],
					'<%= appDir %>/js/config.js' :		['<%= srcDir %>/app/config.*.js'],
					'<%= appDir %>/js/controllers.js' :	['<%= srcDir %>/app/views/**/*.js'],
					'<%= appDir %>/js/directives.js' :	['<%= srcDir %>/app/directives/*.js', '<%= srcDir %>/js/directives/**/*.js'],
					'<%= appDir %>/js/filters.js' :		['<%= srcDir %>/app/filters/*.js', '<%= srcDir %>/js/filters/**/*.js'],
					'<%= appDir %>/js/modules.js' :		['<%= srcDir %>/app/modules/*.js', '<%= srcDir %>/js/modules/**/*.js'],
					'<%= appDir %>/js/services.js' :	['<%= srcDir %>/app/services/*.js', '<%= srcDir %>/js/services/**/*.js']
				}
			},
			vendor: {
				files: {
					'<%= appDir %>/js/vendor.js' : [
						// add any Bower components here
						'<%= bowerDir %>/ionic/release/js/ionic.js',
						'<%= bowerDir %>/angular/angular.js',
						'<%= bowerDir %>/angular-animate/angular-animate.js',
						'<%= bowerDir %>/angular-sanitize/angular-sanitize.js',
						'<%= bowerDir %>/angular-ui-router/release/angular-ui-router.js',
						'<%= bowerDir %>/ionic/release/js/ionic-angular.js'
					],
					'<%= appDir %>/css/vendor.css': '<%= bowerDir %>/ionic/release/css/ionic.css',
				}
			}
		},

		copy: {
			fonts: {
				files: [
					{ expand: true, cwd: '<%= bowerDir %>/ionic/release/fonts/', src: ['**'], dest: '<%= appDir %>/fonts/' }
				]
			}
		},

		config: {
			options: {
				template: '<%= srcDir %>/config.tmpl.xml',
				dest: '<%= appDir %>/config.xml'
			}
		},

		layout: {
			options: {
				layout: '<%= srcDir %>/views/app/app.tmpl.html',
				dest: '<%= appDir %>/index.html',
			}
		},

		// for cleaning builds before re-building
		clean: {
			options: {
				force: true
			},
			app: {
				src: ['<%= appDir %>/*'],
			}
		}
	});

	// load grunt npm modules
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');

	// build cordova config file
	grunt.registerTask('config', 'Builds the Cordova configuration file from template.', function() {

		var opts = this.options()
			, target = this.target
			, template = grunt.template.process(grunt.file.read(opts.template), {
				data: { target: target, appName: _APP_NAME_ }
			});

		// generate main index.html file
		grunt.file.write(opts.dest, template);
		grunt.log.write('Generating ' + opts.dest + '...').ok();
	});

	// build HTML files based on target
	grunt.registerTask('layout', 'Builds an HTML file for angular.', function() {

		var opts = this.options(),
			target = this.target,
			layout = grunt.template.process(grunt.file.read(opts.layout), {
				data: { target: target, appName: _APP_NAME_ }
			});

		// generate main index.html file
		grunt.file.write(opts.dest, layout);
		grunt.log.write('Generating ' + opts.dest + '...').ok();

	});

	// task for building main index page based on environment
	grunt.registerTask('build', 'Build the app based on environment.', function() {

		var opts = this.options()
			, target = this.target
			, args = this.args;

		// clean up directories
		grunt.task.run('clean');

		// concatenate files in www
		grunt.task.run('concat');

		// copy files in www (fonts, ...)
		grunt.task.run('copy');

		// build cordova config.xml file, uses target so we
		// can switch from production to enterprise for bundle ID
		grunt.task.run('config');

		// build main index.html file
		grunt.task.run('layout');
	});

};

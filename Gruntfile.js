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
					'<%= appDir %>/js/app.js' : 		['<%= srcDir %>/app/app.js'],
					'<%= appDir %>/js/config.js' :		['<%= srcDir %>/app/config.*.js'],
					'<%= appDir %>/js/services.js' :	['<%= srcDir %>/app/services/*.js', '<%= srcDir %>/js/services/**/*.js'],
					'<%= appDir %>/js/controllers.js' :	['<%= srcDir %>/index.tmpl.js', '<%= srcDir %>/views/**/*.js']
				}
			}
		},

		copy: {
			libs: {
				files: [
					{ expand: true, cwd: '<%= bowerDir %>/', src: ['**'], dest: '<%= appDir %>/lib/' }
				]
			},
			css: {
				files: [
					{ src: '<%= srcDir %>/css/style.css', dest: '<%= appDir %>/css/style.css' }
				]
			},
			images: {
				files: [
					{ expand: true, cwd: '<%= srcDir %>/images/', src: ['**'], dest: '<%= appDir %>/images/' }
				]
			},
			views: {
				files: [
					{ expand: true, cwd: '<%= srcDir %>/views/', src: ['**/*.html'], dest: '<%= appDir %>/views/' }
				]
			},
			config: {
				files: [
					{ src: '<%= srcDir %>/config.xml', dest: '<%= appDir %>/config.xml' }
				]
			}
		},

		// layout template
		layout: {
			options: {
				layout: '<%= srcDir %>/index.tmpl.html',
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
			},
			css: {
				src: ['<%= appDir %>/css']
			},
			js: {
				src: ['<%= appDir %>/js']
			},
			images: {
				src: ['<%= appDir %>/images']
			},
			views: {
				src: ['<%= appDir %>/views']
			}
		},

		// watch files, build on the fly for development
		watch: {
			config: {
				files: ['<%= srcDir %>/config.xml'],
				tasks: ['copy:config']
			},
			scripts: {
				files: ['<%= srcDir %>/*.js', '<%= srcDir %>/app/**/*.js', '<%= srcDir %>/views/**/*.js'],
				tasks: ['clean:js', 'concat:app']
			},
			images: {
				files: ['<%= srcDir %>/images/**'],
				tasks: ['clean:images', 'copy:images']
			},
			views: {
				files: ['<%= srcDir %>/index.tmpl.html', '<%= srcDir %>/views/**/*.html'],
				tasks: ['clean:views', 'layout', 'copy:views']
			},
			css: {
				files: ['<%= srcDir %>/css/style.css'],
				tasks: ['clean:css', 'copy:css']
			}
		},

		connect: {
			server: {
				options: {
					port: 8000,
					base: '<%= appDir %>'
				}
			}
		}
	});

	// load grunt npm modules
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');

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
		grunt.task.run('clean:app');

		// concatenate files in www
		grunt.task.run('concat');

		// copy files in www (fonts, ...)
		grunt.task.run('copy');

		// build main index.html file
		grunt.task.run('layout');
	});

	grunt.registerTask('dev', ['build', 'connect', 'watch']);

};

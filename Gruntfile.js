module.exports = function (grunt) {

	 grunt.initConfig({
	 	pkg: grunt.file.readJSON('package.json'),



	 	spriteGenerator: {
	 		options:{
	 			algorithm: 'binary-tree',
	 			padding: 10
	 		},
	 		default_task: {
	 			files: {
	 				'app/images/sprite.svg' : ['app/styles/sass/atoms/icons.scss']
	 			}
	 		}
	 	},

	 	cssmin: {
	 		css: {
	 			files: {
	 				'app/styles/css/main.min.css' : 'app/styles/css/main.min.css'
	 			}
	 		}
	 	},


	 	customProps: {
	 		package: {
	 			src: ['app/styles/sass/mixins.scss'],
	 			dest: 'app/styles/sass/mixins.scss'
	 		}
	 	}

	 });


	 grunt.loadNpmTasks('grunt-contrib-sass');
	 grunt.loadNpmTasks('grunt-contrib-watch');
	 grunt.loadNpmTasks('grunt-autoprefixer');
     grunt.loadNpmTasks('grunt-contrib-cssmin');
     grunt.loadNpmTasks('grunt-contrib-watch');
     grunt.loadNpmTasks('grunt-sprite-generator');
     grunt.loadNpmTasks('grunt-custom-props');
     grunt.registerTask('watchfiles', 'package-css', ['sass',  'watch', 'customProps:package' ]);

};
module.exports = function(grunt){
	//项目配置
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*!\n' +
	            ' * <%= pkg.name %> v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
	            ' * Copyright © <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
	            ' */\n',
		less: {
			build: {
				files: {
					'dist/css/bootstrap-navbar-addon.css': 'less/bootstrap-navbar-addon.less'
				}
			}
		},
		cssmin: {
			options: {
				banner: '<%= banner %>',
				keepSpecialComments: '0'
			},
			compress: {
				files: {
					'dist/css/bootstrap-navbar-addon.min.css': 'dist/css/bootstrap-navbar-addon.css'
				}
			}
		},
		watch: {
			less: {
				files: ['less/bootstrap-navbar-addon.less'],
				tasks: ['less']
			},
			cssmin: {
				files: ['dist/css/bootstrap-navbar-addon.css'],
				tasks: ['cssmin']
			}
		}
	});
	//加载插件
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	//制定任务
	grunt.registerTask('default',['less', 'cssmin']);
}
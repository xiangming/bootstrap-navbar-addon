module.exports = function(grunt){
	//项目配置
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*!\n' +
	            ' * <%= pkg.name %> v<%= pkg.version %>\n' +
	            ' * <%= pkg.author %>\n' +
	            ' * <%= grunt.template.today("yyyy-mm-dd") %> <%= grunt.template.today("hh:mm:ss") %>\n' +
	            ' */\n',
		uglify: {
			options: {
				banner: '<%= banner %>'
			},
			app: {
				files: {
					// 'dist/js/all.min.js': [
					// 	'assets/jquery/jquery-1.9.1.min.js',
					// 	'assets/bootstrap/js/bootstrap.min.js',
					// 	'js/app.js'
					// ],
					'dist/js/base.min.js': [
						'assets/jquery/jquery-1.9.1.min.js',
						'assets/bootstrap/js/bootstrap.min.js',
						'assets/bootstrap-datepicker/js/bootstrap-datepicker.js'
					]
				}
			}
		},
		less: {
			development: {
				files: {
					'dist/css/app.css': 'less/app.less',
					'dist/css/bootstrap-navbar-extension.css': 'less/bootstrap-navbar-extension.less'
				}
			},
			production: {
				options: {
					cleancss: true
				},
				files: {
					'dist/css/app.min.css': 'dist/css/app.css',
					'dist/css/bootstrap-navbar-extension.min.css': 'dist/css/bootstrap-navbar-extension.css'
				}
			}
		},
		cssmin: {
			options: {
				banner: '<%= banner %>'
			},
			app: {
				files: {
					// 'dist/css/all.min.css': [
					// 	'assets/bootstrap/css/bootstrap.min.css',
					// 	'dist/css/app.min.css'
					// ],
					'dist/css/base.min.css': [
						'assets/bootstrap/css/bootstrap.min.css',
						'assets/bootstrap-datepicker/css/datepicker3.css'
					]
				}
			}
		}
	});
	//加载插件
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	//制定任务
	grunt.registerTask('default',['uglify', 'less', 'cssmin']);
}
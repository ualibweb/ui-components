module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            vendor_css: {
                src: [
                    'bower_components/Yamm3/yamm/yamm.css'
                ],
                dest: 'dist/vendor.css'
            },
            vendor_js: {
                src: [
                    'bower_components/angular/angular.min.js',
                    'bower_components/angular-animate/angular-animate.min.js',
                    'bower_components/angular-strap/dist/angular-strap.min.js',
                    'bower_components/angular-strap/dist/angular-strap.tpl.min.js'
                ],
                dest: 'dist/vendor.js'
            },
            components: {
                src: ['src/**/*.js'],
                dest: 'dist/ui-components.js'
            }
        },
        html2js: {
            app: {
                options:{
                    base: 'src/',
                    process: true
                },
                src: 'src/**/*.tpl.html',
                dest: 'dist/ui-components-templates.js',
                module: 'ui.components.templates'
            }
        },
        uglify:{
            dist: {
                files: [{
                    src: ['dist/ui-component*.js'],
                    dest: 'dist/ui-components.min.js'
                }]
            }
        },
        less: {
            components:{
                files: {
                    "dist/ui-components.css": "src/**/*.less"
                }
            }
        },
        exec: {
            kss: {
                command: 'kss-node src styleguide --template kss-template --helpers kss-template/helpers --custom codetemplate --custom hidemarkup'
            }
        },
        bump: {
            options: {
                files: ['package.json', 'bower.json'],
                updateConfigs: ['pkg'],
                commit: false,
                commitMessage: 'Release v%VERSION%',
                commitFiles: ['package.json', 'bower.json'],
                createTag: true,
                tagName: 'v%VERSION%',
                tagMessage: 'Version %VERSION%',
                push: false,
                pushTo: 'origin',
                gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
                globalReplace: false,
                prereleaseName: false,
                regExp: false
            }
        },
        clean: ['dist']
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-bump');

    // Default task
    grunt.registerTask('default', ['clean', 'html2js', 'less', 'concat', 'exec']);
    grunt.registerTask('build', ['default', 'uglify']);
};
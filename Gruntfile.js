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
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-less');

    // Default task
    grunt.registerTask('default', ['html2js', 'less', 'concat', 'exec']);
};
module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            components: {
                src: [
                    'bower_components/angular-bootstrap/dist/ui-bootstrap-custom-tpls-0.12.1.js', //not "vendor" since custom build
                    'tmp/templates.js',
                    'src/**/*.js',
                    '!src/stepcard/**/*.js'
                ],
                dest: 'dist/ualib-ui.js'
            }
        },
        html2js: {
            app: {
                options:{
                    base: 'src/',
                    process: true
                },
                src: ['src/**/*.tpl.html', '!src/stepcard/**/*.tpl.html'],
                dest: 'tmp/templates.js',
                module: 'ualib.ui.templates'
            }
        },
        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            app: {
                files: [
                    {
                        'dist/<%= pkg.name %>.js': ['dist/<%= pkg.name %>.js']
                    }
                ]
            }
        },
        uglify:{
            dist: {
                files: [{
                    src: ['dist/<%= pkg.name %>.js'],
                    dest: 'dist/ualib-ui.min.js'
                }]
            }
        },
        clean: {
            app: ['tmp/']
        },
        less: {
            dev:{
                files: {
                    "dist/ualib-ui.css": ["src/**/*.less", "!src/**/service-cards.less"]
                }
            },
            build: {
                files: {
                    'dist/ualib-ui.min.css': ["src/**/*.less", "!src/**/service-cards.less"]
                },
                options: {
                    compress: true
                }
            }
        },
        bower_concat: {
            all: {
                dest: 'dist/vendor.js',
                cssDest: 'dist/vendor.css',
                exclude: [
                    'angular',
                    'angular-bootstrap'
                ]
            }
        },
        exec: {
            kss: {
                command: 'kss-node src styleguide --template kss-template --helpers kss-template/helpers --custom codetemplate --custom hidemarkup'
            }
        },
        grunt: {
            angular_bootstrap: {
                gruntfile: 'bower_components/angular-bootstrap/Gruntfile.js',
                tasks: [
                    'html2js',
                    'build:accordion:alert:bindHtml:buttons:collapse:dateparser:datepicker:pagination:popover:position:timepicker:tooltip:transition'
                ]
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
        }
    });

    require('load-grunt-tasks')(grunt);

    // Default task
    grunt.registerTask('default', ['bower_concat', 'grunt:angular_bootstrap', 'html2js', 'less:dev', 'concat', 'exec', 'clean']);
    grunt.registerTask('build', ['default', 'less:build', 'ngAnnotate', 'uglify']);

};
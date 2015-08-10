module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            components: {
                src: [
                    'bower_components/angular-bootstrap/dist/ui-bootstrap-custom-tpls-0.12.1.js', //not "vendor" since custom build
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
                dest: 'dist/ualib-ui-templates.js',
                module: 'ualib.ui.templates'
            }
        },
        uglify:{
            dist: {
                files: [{
                    src: ['dist/*.js', '!dist/*.min.js'],
                    dest: 'dist/ualib-ui.min.js'
                }]
            }
        },
        less: {
            components:{
                files: {
                    "dist/ualib-ui.css": ["src/**/*.less", "!src/**/service-cards.less"]
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
                    'build:accordion:alert:bindHtml:buttons:carousel:collapse:dateparser:datepicker:modal:pagination:popover:position:progressbar:rating:timepicker:tooltip:transition:typeahead'
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
        },
        clean: ['dist']
    });

    require('load-grunt-tasks')(grunt);

    // Default task
    grunt.registerTask('default', ['clean', 'bower_concat', 'grunt:angular_bootstrap', 'html2js', 'less', 'concat', 'exec']);
    grunt.registerTask('build', ['default', 'uglify']);

};
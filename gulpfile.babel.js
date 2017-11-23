import gulp from 'gulp'
import {spawn} from 'child-process-promise'
import chalk from 'chalk'

gulp.task('server:start', function () {
    const port = 7777;
    console.log(`Web server starting on 0.0.0.0:${port}`);
    return docker(`run --detach --user 1000:0 --name looped-lines --publish ${port}:8080 --volume /home/marthinus/Code/Looped-Lines/application/dist:/usr/share/nginx/html:z registry.pro-eu-west-1.openshift.com/looped-lines/web-server`)
});

gulp.task('build', function () {
    jspm('build --source-map-contents source/app.ts dist/app.js')
});

function docker(args) {
    return run(
        {
            command: 'docker',
            args,
            sudo: true
        }
    );
}

function jspm(args) {
    return run(
        {
            command: 'jspm',
            args
        })
}

function run({command, args, sudo = false}) {
    args = args.split(' ');

    if (sudo) {
        return spawn('sudo', [command, ...args], {stdio: 'inherit'});
    } else {
        return spawn(command, args, {stdio: 'inherit'});
    }
}
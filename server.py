#!/usr/bin/env python
import tornado.ioloop
import tornado.web

import json
from tornado.options import options, define
from tornado.autoreload import watch
from jinja2 import Environment, FileSystemLoader

env = Environment(loader=FileSystemLoader('templates'))

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        template = env.get_template('index.html')
        self.write(template.render({
            'assets': options.ASSETS
        }))

application = tornado.web.Application([
    (r"/", MainHandler),
], static_path='static', debug=True)

if __name__ == "__main__":
    try:
        fn = 'webpack-assets.json'
        with open(fn) as f:
            watch(fn)
            assets = json.load(f)
    except IOError:
        pass
    except KeyError:
        pass

    define('ASSETS', assets)
    application.listen(8888)
    tornado.ioloop.IOLoop.current().start()

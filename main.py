#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import webapp2
import os
import json
import base64
from google.appengine.ext.webapp import template
from google.appengine.api import users
from google.appengine.ext import db

# from google.appengine.dist import use_library
# use_library('django', '1.0')
# from django.utils import simplejson as json

# from google.appengine.ext.webapp.util import run_wsgi_app

class Tasks(db.Model):
    user = db.UserProperty()
    content = db.StringProperty(multiline=True)


class DayListHandler(webapp2.RequestHandler):
    def get(self):
    	user = users.get_current_user()
    	url = ''
    	username = ''
    	token = ''
    	body = ''

    	if user:
    		url = users.create_logout_url("/daylist")
    		username = user.nickname()
    		token = base64.b64encode(username)

    		# task = Tasks.gql("where user=:1",users.get_current_user()).get()
    		# if task:
      #   		body = task.content


    	else:
    		url = users.create_login_url("/daylist")
    		username = 'anonymous'
    		token = base64.b64encode(username)
    		body = ''

        template_values = {'username':username,
        					'url':url,
        					'body': body}

        path = os.path.join(os.path.dirname(__file__), 'templates/daylist.html')

        self.response.out.write(template.render(path, template_values))

class MainHandler(webapp2.RequestHandler):
    def get(self):
        user = users.get_current_user()
        url = ''
        username = ''
        token = ''
        body = ''

        if user:
            url = users.create_logout_url("/")
            username = user.nickname()
            token = base64.b64encode(username)

            task = Tasks.gql("where user=:1",users.get_current_user()).get()
            if task:
                body = task.content


        else:
            url = users.create_login_url("/")
            username = 'anonymous'
            token = base64.b64encode(username)
            body = ''

        template_values = {'username':username,
                            'url':url,
                            'body': body}

        path = os.path.join(os.path.dirname(__file__), 'templates/index.html')

        self.response.out.write(template.render(path, template_values))


class AjaxHandler(webapp2.RequestHandler):
    def get(self):
        ret = ''
        # Сперва защита
        user = users.get_current_user()
   
        do_what = self.request.get('do_what')
        if do_what == 'save':
        	if user:
	        	task = Tasks.gql("where user=:1",users.get_current_user()).get()
	        	if not task:
	        		task = Tasks()
	        	task.content = self.request.get('content')
	        	task.user = user
	        	task.put()
        	ret = {'status':'Ok'}
        	ret = json.dumps(ret,ensure_ascii=False)
        elif do_what == 'debug':
			ret = {'status':'Ok'};
			tasks = Tasks.gql("where user=:1",users.get_current_user())            	
			for t in tasks:
				ret['body'] = t.content
			ret = json.dumps(ret,ensure_ascii=False)
        else:
            # Прочие ситуации
            ret =" AJAX rulezzzzz"

        self.response.out.write(ret)


app = webapp2.WSGIApplication([('/', MainHandler),
                                ('/daylist',DayListHandler),
								('/ajax',AjaxHandler)],
                              debug=True)

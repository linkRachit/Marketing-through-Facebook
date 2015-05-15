from django.shortcuts import render,render_to_response
import os
import csv
from django.http import HttpResponse

# Create your views here.
def post_home(request):
	#context = {}
	value = []
	template = "post_blank.html"
	value = list_folder()
	
	return render( request, template, {'filelist':value[0]})

def list_folder():
	values = []
	for dirname, dirnames, filenames in os.walk('./Database/post'):
		values.append(dirnames)
	return values	

def post_table(request):
	context = {}
	template = "post_tables.html"
	return render( request, template, context)

def post_engine(request):
	context = {}
	template = "post_engine.html"
	return render( request, template, context)

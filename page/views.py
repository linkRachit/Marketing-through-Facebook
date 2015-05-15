from django.shortcuts import render
import os

# Create your views here.
def page_home(request):
	#context = {}
	value = []
	template = "page_blank.html"
	value = list_folder()
	
	return render( request, template, {'filelist':value[0]})

def list_folder():
	values = []
	for dirname, dirnames, filenames in os.walk('./Database/page'):
		values.append(dirnames)
	return values

def page_table(request):
	context = {}
	template = "page_tables.html"
	return render( request, template, context)

def page_engine(request):
	context = {}
	template = "page_engine.html"
	return render( request, template, context)	
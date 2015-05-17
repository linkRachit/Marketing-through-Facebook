from django.shortcuts import render
import os
import csv
from django.http import HttpResponse

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

def page_pickup(request):
	context = {}
	template = "page_pickup.html"
	return render( request, template, context)	

def page_ProductService(request):
	context = {}
	template = "page_ProductService.html"
	return render( request, template, context)

def page_PublicFigure(request):
	context = {}
	template = "page_PublicFigure.html"
	return render( request, template, context)

def page_engineProductService(request):
	context = {}
	template = "page_engineProductService.html"
	return render( request, template, context)

def page_enginePublicFigure(request):
	context = {}
	template = "page_enginePublicFigure.html"
	return render( request, template, context)



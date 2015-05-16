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

def post_pickup(request):
	context = {}
	template = "post_pickup.html"
	return render( request, template, context)

def post_Clothing(request):
	context = {}
	template = "post_Clothing.html"
	return render( request, template, context)

def post_Education(request):
	context = {}
	template = "post_Education.html"
	return render( request, template, context)

def post_InternetSoftware(request):
	context = {}
	template = "post_InternetSoftware.html"
	return render( request, template, context)

def post_ProductService(request):
	context = {}
	template = "post_ProductService.html"
	return render( request, template, context)			

def post_engineClothing(request):
	context = {}
	template = "post_engineClothing.html"
	return render( request, template, context)

def post_engineEducation(request):
	context = {}
	template = "post_engineEducation.html"
	return render( request, template, context)

def post_engineInternetSoftware(request):
	context = {}
	template = "post_engineInternetSoftware.html"
	return render( request, template, context)

def post_engineProductService(request):
	context = {}
	template = "post_engineProductService.html"
	return render( request, template, context)		
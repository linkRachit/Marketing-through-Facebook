from django.shortcuts import render

# Create your views here.
def website_home(request):
	context = {}
	template = "website_blank.html"
	return render( request, template, context)

def website_table(request):
	context = {}
	template = "website_tables.html"
	return render( request, template, context)

def website_engine(request):
	context = {}
	template = "website_engine.html"
	return render( request, template, context)	
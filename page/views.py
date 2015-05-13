from django.shortcuts import render

# Create your views here.
def page_home(request):
	context = {}
	template = "page_blank.html"
	return render( request, template, context)

def page_table(request):
	context = {}
	template = "page_tables.html"
	return render( request, template, context)

def page_engine(request):
	context = {}
	template = "page_engine.html"
	return render( request, template, context)	
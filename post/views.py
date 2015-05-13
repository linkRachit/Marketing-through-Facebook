from django.shortcuts import render

# Create your views here.
def post_home(request):
	context = {}
	template = "post_blank.html"
	return render( request, template, context)

def post_table(request):
	context = {}
	template = "post_tables.html"
	return render( request, template, context)

def post_engine(request):
	context = {}
	template = "post_engine.html"
	return render( request, template, context)		
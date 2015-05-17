from django.shortcuts import render

# Create your views here.


def website_table(request):
	context = {}
	template = "website_tables.html"
	return render( request, template, context)


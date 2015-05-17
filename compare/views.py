from django.shortcuts import render

# Create your views here.
def page_home(request):
	context = {}
	#value = []
	template = "compare_blank.html"
	#value = list_folder()
	
	return render( request, template, context)

def compare_engineProductService(request):
	context = {}
	template = "compare_engineProductService.html"
	return render( request, template, context)	
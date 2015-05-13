from django.shortcuts import render


def home(request):
	context = {}
	template = "index.html"
	return render( request, template, context)


#def home2(request):
	#print("welcome")
	#return 
#	context = {}
#	template = "index1.html"
#	return render( request, template, context)
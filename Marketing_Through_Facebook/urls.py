from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    # Examples:
    url(r'^$', 'Marketing_Through_Facebook.views.home', name='home'),
    url(r'^engine$', 'Marketing_Through_Facebook.views.engine', name='engine'),
     # url(r'^home2$', 'Marketing_Through_Facebook.views.home2', name='home2'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
]

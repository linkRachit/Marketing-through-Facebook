from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    # Examples:
    url(r'^$', 'Marketing_Through_Facebook.views.home', name='home'),
    url(r'^post/blank\.html$', 'post.views.post_home', name='post_home'),
    url(r'^post/tables\.html$', 'post.views.post_table', name='post_table'),
    url(r'^post/engine\.html$', 'post.views.post_engine', name='post_engine'),

    url(r'^page/blank\.html$', 'page.views.page_home', name='page_home'),
    url(r'^page/tables\.html$', 'page.views.page_table', name='page_table'),
    url(r'^page/engine\.html$', 'page.views.page_engine', name='page_engine'),

    url(r'^website/blank\.html$', 'website.views.website_home', name='website_home'),
    url(r'^website/tables\.html$', 'website.views.website_table', name='website_table'),
    url(r'^website/engine\.html$', 'website.views.website_engine', name='website_engine'),
     # url(r'^home2$', 'Marketing_Through_Facebook.views.home2', name='home2'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
]

from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    
    url(r'^$', 'Marketing_Through_Facebook.views.home', name='home'),

    url(r'^post/blank\.html$', 'post.views.post_home', name='post_home'),

    url(r'^post/pickup\.html$', 'post.views.post_pickup', name='post_pickup'),

    url(r'^post/Clothing\.html$', 'post.views.post_Clothing', name='post_Clothing'),
    url(r'^post/Education\.html$', 'post.views.post_Education', name='post_Education'),
    url(r'^post/InternetSoftware\.html$', 'post.views.post_InternetSoftware', name='post_InternetSoftware'),
    url(r'^post/ProductService\.html$', 'post.views.post_ProductService', name='post_ProductService'),

    url(r'^post/engineClothing\.html$', 'post.views.post_engineClothing', name='post_engineClothing'),
    url(r'^post/engineEducation\.html$', 'post.views.post_engineEducation', name='post_engineEducation'),
    url(r'^post/engineInternetSoftware\.html$', 'post.views.post_engineInternetSoftware', name='post_engineInternetSoftware'),
    url(r'^post/engineProductService\.html$', 'post.views.post_engineProductService', name='post_engineProductService'),






    url(r'^page/blank\.html$', 'page.views.page_home', name='page_home'),

    url(r'^page/pickup\.html$', 'page.views.page_pickup', name='page_pickup'),

    url(r'^page/ProductService\.html$', 'page.views.page_ProductService', name='page_ProductService'),
    url(r'^page/PublicFigure\.html$', 'page.views.page_PublicFigure', name='page_PublicFigure'),

    url(r'^page/engineProductService\.html$', 'page.views.page_engineProductService', name='page_engineProductService'),
    url(r'^page/enginePublicFigure\.html$', 'page.views.page_enginePublicFigure', name='page_enginePublicFigure'),








    url(r'^website/blank\.html$', 'website.views.website_home', name='website_home'),
    url(r'^website/tables\.html$', 'website.views.website_table', name='website_table'),
    url(r'^website/engine\.html$', 'website.views.website_engine', name='website_engine'),
     # url(r'^home2$', 'Marketing_Through_Facebook.views.home2', name='home2'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
]

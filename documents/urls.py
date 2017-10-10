from django.conf.urls import url
from documents import views

urlpatterns = [
    url(r'^documents/$',views.document_list),
    url(r'^documents/(?P<pk>[0-9]+)/$',views.document_detail)
]
urlpatterns += [
    url(r'^translations/$',views.translation_list),
    url(r'^translations/(?P<pk>[0-9]+)/$',views.translation_detail)
]

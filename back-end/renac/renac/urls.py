from django.contrib import admin
from django.urls import path
from rest_framework import routers
from rest_framework.authtoken.views import ObtainAuthToken
from django.conf.urls import url, include
from api import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)
router.register(r'provincias', views.ProvinciaViewSet)
router.register(r'cantones', views.CantonViewSet)
router.register(r'parroquias', views.ParroquiaViewSet)
router.register(r'sensores', views.SensorViewSet)
router.register(r'acelerografos', views.AcelerografoViewSet)
router.register(r'sismos', views.SismoViewSet)
router.register(r'dataloggers', views.DataloggerViewSet)
router.register(r'estaciones', views.EstacionViewSet)
router.register(r'aceleraciones', views.AceleracionViewSet)
router.register(r'materiales', views.MaterialViewSet)
router.register(r'danos', views.DanoViewSet)
router.register(r'tipos', views.TipoViewSet)
router.register(r'reportes', views.ReporteViewSet)
router.register(r'perfiles', views.PerfilViewSet)


urlpatterns = [
    path('admin/', admin.site.urls),
    # url(r'^api-auth/', ObtainAuthToken.as_view()),
    url(r'^api-token-auth/', views.CustomAuthToken.as_view()),
    url(r'^', include(router.urls)),
    url(r'^rest-auth/', include('rest_auth.urls')),
    url(r'^rest-auth/registration/', include('rest_auth.registration.urls'))
]

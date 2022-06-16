from django.shortcuts import render, redirect
from django.views import View
from .models import * #모든 모델 상속
# Create your views here.

#html 소스와 연결하기
'''
    template/을 기본 root경로라고 가정한 뒤, 
    그 이후에 위치한 상대경로만을 render내부의 경로로 입력
'''

#html 연결
def main_html(request):
    return render(request, 'main.html')

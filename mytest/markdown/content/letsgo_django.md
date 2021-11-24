# letsgoSongPa System Information

- Backend: 172.200.11.97 (ec2-user/.pem, letsgosp/songpa)
- Bastion: 13.209.14.195 (ec2-user/.pem)
- url: https://letsgo.arambookclub.com
- port: 10000 ~ 10005
  - 10000: API through NginX
  - 10001: Home Page
- S/W
  - AWS Linux2 (centos7)
  - (Anaconda)Conda/4.9.2 # conda --version
  - python/3.8.3 # Basement of phthon
  - python/3.9.0 # Virtual Env: dj3
  - django/3.0.3 # Virtual Env: dj3

# letsgoSonaPa application Information

- Project Name: letsgo
  L Super User: letsgo/songpa
- Application Name: songpa

# Django Installation

1. Anaconda Installation
   $ cd ./SW
   $ wget https://repo.anaconda.com/archive/Anaconda3-2020.07-Linux-x86_64.sh # Download Installer
   $ sha256sum Anaconda3-2020.07-Linux-x86_64.sh   # Verification
   $ sh ./SW/Anaconda3-2020.07-Linux-x86_64.sh # Installation
   $ conda update conda                            # Update for latest version
   $ conda update anaconda
2. Make Virtual Environment & Activate virtual environment
   $ conda create -n dj3 phthon=3.9.0
      L $ conda search python # search for latest vertion
   $ conda activate dj3
      L $ conda deactivate # exit from current virtual Env
3. Install Django S/W
   dj3> conda install django
   L dj3> python -m django --version # check the django version
4. Make the django project with letsgoSongPa
   dj3> django-admin startproject letsgo
   dj3> python manage.py migrate # Make default DB
   dj3> python manage.py createsuperuser # Make Administrator
   dj3> python manage.py runserver 0.0.0.0:10001
5. Make Application
   dj3> python manage.py startapp songpa
   dj3> python manage.py makemigrations sonpa # Make DB Schema

# JWT Installation

- https://dev-yakuza.posstree.com/ko/django/jwt/

1. pip install djangorestframework-jwt
2. settings.py
   REST_FRAMEWORK = {
   'DEFAULT_PERMISSION_CLASSES': (
   'rest_framework.permissions.IsAuthenticated',
   ),
   'DEFAULT_AUTHENTICATION_CLASSES': (
   'rest_framework_jwt.authentication.JSONWebTokenAuthentication',
   'rest_framework.authentication.SessionAuthentication',
   'rest_framework.authentication.BasicAuthentication',
   ),
   }

JWT_AUTH = {
'JWT_SECRET_KEY': SECRET_KEY,
'JWT_ALGORITHM': 'HS256',
'JWT_ALLOW_REFRESH': True,
'JWT_EXPIRATION_DELTA': datetime.timedelta(days=7),
'JWT_REFRESH_EXPIRATION_DELTA': datetime.timedelta(days=28),
}

# django-rest-knox: social authentication

- knox 설치
- settings.py 등록
- knox_authtoken table 생성(makemigrations & migrate)
- Error
  1.1 TypeError: object of type AuthToken is not JSON serialization
  1.2 https://itinerant.tistory.com/164
  1.3 return Response(
  {
  "user": UserSerializer(
  user, context=self.get_serializer_context()
  ).data,
  "token": AuthToken.objects.create(user)[1],
  }
  )
  1.4 Ref: https://hyunvinci.tistory.com/entry/53-장고-토큰-인증-로그인-구현하기-영어쌤이-만드는-회원가입-인증CRUD-만들어욤-리액트와-파이썬-장고

# uwsgi 설치
Ref.: https://nerogarret.tistory.com/47

- 가상환경(dj3)의 특정 Python 호출을 위해 python home 지정
  - 파일: /hoem/letsgosp/letsgo/letsgo/wsgi.py
    ㄴ import sys
    ㄴ sys.path.append('/home/letsgosp/anaconda3/envs/dj3/bin')
    dj3> conda install -c conda-forge uwsgi
    dj3> uwsgi --http :10001 --home /home/letsgosp/aconda3/envs/dj3/ --chdir /home/letsgosp/letsgo/ -w letsgo.wsgi
    ec2-user> sudo /home/letsgosp/anaconda3/envs/dj3/bin/uwsgi -i /home/letsgosp/letsgo/.config/uwsgi/letsgo.ini

# nginx - uwsgi 연결
Ref.: https://nerogarret.tistory.com/48
\*\* nginx <-> uwsgi 간 streaming.sock 파일 위치가 "/tmp/" 에 있으면 안됨.

# letsgo 서비스 기동/정지
- 프로그램 수정 후
  dj3> python manage.py collectstatic
  ec2-user> sudo systemctl stop nginx uwsgi
  ec2-user> sudo systemctl daemon-reload
  ec2-user> sudo systemctl start uwsgi
  ec2-user> sudo systemctl start nginx # 같이 실행하면 letsgo.sock 파일을 nginx 가 인식 못하는 현상 발생


# Django Admin Customization
Ref.: https://www.webforefront.com/django/admincustomlayout.html

# Windows to Linux File Transfer
scp -i C:\aramkey\aram.pem templates.tar letsgosp@172.200.11.97:/home/letsgosp/tagme/

# 기타 소프트웨어
1. CMS: wordpress or djangoCMS
2. DBMS: MariaDB and MongoDB

# Server: mgrnd05-letsrun
    database name: wordpress
Starting a new project
name: letsrun
Starting a new app
name: 1. wordpress, 2. api (app 등록 순서 절대 필요)
-- 참고
VSC Font: D2Coding, Hack, Menlo, Monaco, Consolas, 'Courier New', monospace
export LS_COLORS="di=0;36"
# Things Flow

비회원 게시판 서비스
<br><br>

## 📌 서비스 개요

- 본 서비스는 비회원 게시판 이용 서비스 입니다.

## 📌 요구사항 분석 및 구현



### 1. 게시글 CREATE
- 게시글은 제목(최대 20자)과 본문(최대 200자)으로 구성되며 이모지를 포함할 수 있습니다.
- 게시글을 올릴때 사용자는 비밀번호(6자 이상, 숫자 1개 이상 포함)를 설정할 수 있습니다.
- 비밀번호는 암호화하여 데이터베이스에 저장합니다.
- Real-time Weather API를 이용하여 게시글을 업로드한 시점의 날씨 정보를 데이터베이스에 저장(추가 요구사항 2)

### 2. 게시글 UPDATE / DELETE
- 게시글을 등록할때 등록했던 비밀번호와 일치하면 수정 및 삭제가 가능합니다.

### 3. 게시글 READ
- 게시글을 최신 글 순서로 불러 옵니다.
- 스크롤을 내릴 때 추가로 20개씩 로드 해줍니다.(추가 요구사항 1)

## 📌 DB Modeling

- posts : 게시글 테이블(id, password, title, content, weather, createdAt, updatedAt)
<br>

## 📌 API DOCS


<br><br>

## 📌 적용 기술

- 사용언어 : Javascript
- 런타임 환경 : Node.js
- 프레임워크 : Express
- ORM : Sequelize
- 데이터베이스 : MySQL
  <br/> <br/>

## 📌 Commit Convention

- feat : 새로운 기능 추가
- fix : 버그 수정
- docs : 문서 수정
- style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우, linting
- refactor : 코드 리팩터링
- test : 테스트 코드, 리팩터링 테스트 코드 추가
- chore : 빌드 업무 수정, 패키지 매니저 수정, 그 외 자잘한 수정에 대한 커밋

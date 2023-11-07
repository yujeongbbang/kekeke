import React from 'react'
import '../css/Header.css'
import '../css/Login.css'


const Login = () => {
  return (
   <div className='index'>
    <div className="index">
      <div className="div-7">
        <footer className="footer">
          <div className="overlap-group-2">
            <div className="rectangle" />
            <div className="text-wrapper-2">Copyright 2023.kekeke.All rights reserved</div>
            <img
              className="kekeke"
              alt="Kekeke"
              src="https://cdn.animaapp.com/projects/65487711df11ee569541a3c7/releases/654877b599d82c8d5b729daa/img/kekeke--2--2.png"
            />
          </div>
        </footer>
        <div className="login-area">
          <div className="login-text">
            <div className="text-wrapper-3">로그인</div>
          </div>
          <div className="login-input-area">
            <div className="login-id-input">
              <div className="div-wrapper-2">
                <div className="text-wrapper-4">아이디를 입력하세요</div>
              </div>
            </div>
            <div className="login-pw-input">
              <div className="div-wrapper-3">
                <div className="text-wrapper-4">비밀번호를 입력하세요</div>
              </div>
            </div>
          </div>
          <div className="login-button">
            <div className="div-wrapper-4">
              <div className="text-wrapper-5">로그인하기</div>
            </div>
          </div>
          <div className="loginto-join">
            <div className="div-wrapper-5">
              <div className="text-wrapper-6">회원이 아니라면?</div>
            </div>
            <div className="div-wrapper-6">
              <div className="text-wrapper-7">회원가입</div>
            </div>
          </div>
        </div>
        {/* <DivWrapper className="component-68" /> */}
      </div>
    </div>
   </div>
  )
}

export default Login
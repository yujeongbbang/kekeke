import React, {useState} from 'react'
import Ad_Menubar from '../component/Ad_Menubar'
import Ad_BG from '../ad_component/Ad_BG'
import { AiOutlineCamera } from 'react-icons/ai';
import '../ad_css/AdminMypage.css'

const AdminMypage = () => {

      // ***** 판매자 정보 데이터 (임시)

  const [adminnickname, setadminNickname] = useState('뽀로로'); // 임의의 초기 닉네임
  const [adminpassword, setadminPassword] = useState(''); // 임의의 초기 비밀번호
  const [adminphone, setadminPhone] = useState('010-9876-5432'); // 임의의 초기 전화번호

   // 비밀번호 확인 상태 추가
   const [confirmPassword, setConfirmPassword] = useState('');

   // 비밀번호 변경 핸들러
   const handlePasswordChange = (event) => {
     setadminPassword(event.target.value);
   };
   // 비밀번호 확인 변경 핸들러
   const handleConfirmPasswordChange = (event) => {
     setConfirmPassword(event.target.value);
   };
 
   // 전화번호 변경 핸들러
   const handlePhoneChange = (event) => {
     setadminPhone(event.target.value);
   };
 
   // 수정 사항 저장 핸들러
   const handleSaveChanges = () => {
     // 모든 입력란이 채워져 있는지 확인
     if (!adminnickname.trim() || !adminpassword.trim() || !adminphone.trim()) {
       // 하나라도 비어있다면 경고 메시지를 띄움
       alert('모든 필드를 채워주세요.');
       return; // 함수를 여기서 종료하여 API 호출이나 다른 로직이 실행되지 않도록 함
     }
 
     // 닉네임 중복 확인
     if (!isNicknameAvailable) {
       alert('이미 사용 중인 닉네임입니다. 다른 닉네임을 선택해 주세요.');
       return;
     }
     // 비밀번호와 비밀번호 확인이 일치하는지 확인
     if (adminpassword !== confirmPassword) {
       alert('비밀번호가 일치하지 않습니다.');
       return;
     }
 
 
     // 여기에서 수정 사항을 처리합니다. 예를 들어, API 호출을 통해 백엔드에 업데이트를 요청할 수 있습니다.
     console.log('닉네임:', adminnickname);
     console.log('비밀번호:', adminpassword);
     console.log('전화번호:', adminphone);
     alert('수정이 완료되었습니다.');
     // API 호출이나 다른 로직을 추가하세요.
 
     window.scrollTo(0, 0); // 화면 상단으로 스크롤 이동
   };

   // ****** 중복 확인

  const [isNicknameAvailable, setIsNicknameAvailable] = useState(true);

  // 임시 중복 확인 데이터
  const existingNicknames = ['케로로빵', 'kekeke', '케케케',
    '송민아줌마', '미나곤듀언니티비', '김은호나마에와', '기므노', '김용민달팽이',
    '정건식사료', '정건식사하셨나요', '서유정말예쁘다', '용용이보고싶어요'];

  // 닉네임 변경 핸들러
  const handleNicknameChange = (event) => {
    setadminNickname(event.target.value);
  };

  // 닉네임 중복 확인
  const checkNicknameAvailability = () => {
    setIsNicknameAvailable(!existingNicknames.includes(adminnickname));
  };

  // 중복 확인 버튼을 눌렀을 때 호출
  const handleDuplicateCheckClick = () => {
    checkNicknameAvailability();
  };
  // -------------------------------------------------------------

  // 모든 입력란에 값이 있는지 확인하는 함수
  const isFormValid = () => {
    return adminnickname.trim() && adminpassword.trim() && adminphone.trim();
  };

  // ****** 이미지 등록 기능

  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }

  }

  return (
    <div>
        <Ad_Menubar/>
        
        <div className='AdminMypage_container'>
 <div className="UserMypagePhoto">
              {image ? (
                <img src={image} alt="사용자 정보 수정" className="uploaded-image" />
              ) : (
                <label htmlFor="image-upload" className="upload-label">
                  <AiOutlineCamera className="camera-icon" />
                  <span>이미지 업로드</span>
                </label>
              )}
              <input
                type="file"
                id="image-upload"
                onChange={handleImageChange}
                style={{ display: 'none' }}
              />
            </div>

            <div className="overlap-group">
            </div>

            {/* 닉네임 변경 */}

            <div className="nick-input">
              <div className="nick-input-box">

                <input
                  className="nick_input_text"
                  type='text'
                  placeholder='닉네임을 입력하세요'
                  value={adminnickname}
                  onChange={handleNicknameChange}
                />

              </div>
              <div className="nicktxt">
                <div className="div">닉네임 변경</div>
              </div>
              <div className="duplicate-btn">
                <button className="duplicatetxt" onClick={handleDuplicateCheckClick}>
                  <div className="text-wrapper-3">중복확인</div>
                </button>
              </div>
              {!isNicknameAvailable && (
                <div className="nickname-unavailable">이미 사용 중인 닉네임입니다.</div>
              )}
            </div>

            {/* 비밀번호 변경 */}

            <div className="pw-input">
              <div className="pwtxt">
                <div className="text-wrapper-2">비밀번호 변경</div>
              </div>
              <div className="pw-input-box">

                <input
                  className="pw-input-text"
                  type="password"
                  placeholder="새로운 비밀번호 입력"
                  value={adminpassword}
                  onChange={handlePasswordChange}
                />

              </div>
            </div>
            <div className="pw-cheak-input">
              <div className="pwcheaktxt">
                <div className="div">비밀번호 확인</div>
              </div>
              <div className="pw-cheak-box">
                <input
                  className="pw-cheak-text"
                  type="password"
                  placeholder="비밀번호 확인"
                  value={confirmPassword} // 상태를 value에 연결
                  onChange={handleConfirmPasswordChange} // 이벤트 핸들러를 onChange에 연결
                />
              </div>
            </div>

            {/* 전화번호 변경 */}

            <div className="phone-input">
              <div className="phonetxt">
                <div className="div">전화번호</div>
              </div>
              <div className="phone-input-box">
                <input
                  className="phone-input-text"
                  type="tel"
                  placeholder="전화번호 입력"
                  value={adminphone}
                  onChange={handlePhoneChange}
                />
              </div>
            </div>
          </div>

          {/* 수정하기 버튼 */}
          <div className="modify-btn">
            <button className="modifytxt" onClick={handleSaveChanges}>
              수정하기
            </button>
          </div>
        </div>
  );
};
            
export default AdminMypage
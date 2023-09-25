const LoginPage = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl">로그인</h1>
      <h3 className="font-semibold text-lg">
        애니모리 친구들이 기다리고 있어요 :)
      </h3>
      <form>
        <label htmlFor="id" className="font-semibold">
          이메일
        </label>
        <input
          id="id"
          name="id"
          type="text"
          placeholder="이메일을 입력해주세요"
        />
      </form>
      <form>
        <label htmlFor="password" className="font-semibold">
          비밀번호
        </label>
        <input
          id="password"
          name="password"
          type="text"
          placeholder="비밀번호를 입력해주세요"
        />
      </form>
      <button onClick={() => console.log('Click')}>로그인</button>
      <div>
        <span>게정이 없다면? </span>
        <button>회원가입 하러가기</button>
      </div>
    </div>
  );
};

export default LoginPage;

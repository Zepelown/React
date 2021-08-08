몰랐던 것들

	파라미터에 ...은 값은 모든 값을 받는다는 것이다.

			function test(x,y,...z){
				console.log(x);  // 3출력
				console.log(y);  // 4출력
				console.log(z);  // [5,6]출력
			}

			test(3,4,5,6);

	위에 예시를 보면 이해가 갈 것이다.
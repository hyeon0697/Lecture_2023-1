var answer = `
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  function getUser(userId) {
    return new Promise((resolve, reject) => {
      // 비동기적으로 사용자 정보를 가져오는 작업을 수행
      // 성공 시 resolve를 호출하여 결과값 반환
      // 실패 시 reject를 호출하여 에러 반환
      setTimeout(() => {
        const users = [
          { id: 1, name: 'John' },
          { id: 2, name: 'Mike' },
          { id: 3, name: 'Emily' },
        ];
        const user = users.find(user => user.id === userId);
        if (user) {
          resolve(user);
        } else {
          reject(new Error("User \${userId} not found"));
        }
      }, 1000);
    });
  }
  
  // getUser 함수를 호출하고 결과값을 출력하는 예제
  getUser(2)
    .then(user => console.log(user))
    .catch(error => console.error(error));

// delay 함수를 사용하여 지연 시간을 추가하는 예제
delay(2000)
.then(() => console.log('Done!'));
`

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    async function getUser(userId) {
    // 비동기적으로 사용자 정보를 가져오는 작업을 수행
    // 성공 시 결과값 반환, 실패 시 에러 반환
    await delay(1000);
    const users = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Mike' },
        { id: 3, name: 'Emily' },
    ];
    const user = users.find(user => user.id === userId);
    if (user) {
        return user;
    } else {
        throw new Error(`User ${userId} not found`);
    }
    }
    
    // getUser 함수를 호출하고 결과값을 출력하는 예제
    async function test() {
    try {
        const user = await getUser(2);
        console.log(user);
    } catch (error) {
        console.error(error);
    }
    }
    test();
    
    // delay 함수를 사용하여 지연 시간을 추가하는 예제
    async function test2() {
    await delay(2000);
    console.log('Done!');
    }
    test2();
      

console.log("변환에 사용된 Promise 코드\n\n");
console.log(answer);
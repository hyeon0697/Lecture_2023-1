const answer = `
Node.js v10.5.0 버전부터 기본으로 제공하는 Worker Threads를 사용하여 하위 스레드를 처리할 수 있습니다. Worker Threads는 독립적인 스레드를 생성하여 작업을 병렬로 처리하며, 부모 스레드와는 다른 메모리 공간을 사용합니다.
Cluster 모듈은 Node.js에서 멀티 프로세싱을 지원하기 위한 모듈입니다. 이 모듈은 Master-Worker 모델을 채택하여, 하나의 마스터 프로세스와 여러 워커 프로세스를 생성하여 작업을 분산 처리합니다.
`;
console.log(answer);
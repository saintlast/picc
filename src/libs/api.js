import Vue from 'vue';
export default {
  /**
   * 登录
   * username
   * password
   * @returns {null}
   */
  login(username, password) {
    return Vue.http.post('/manage/login', {
      username: username,
      password: password,
    });
  },

  getReserveList(limit, offset) {
    return Vue.http.get(
      'https://www.easy-mock.com/mock/5abbb60dbbba3f31b063e510/api/getReverseList?limit=' + limit + '&offset=' + offset
    );
  },

  getReserveDetail(id) {
    return Vue.http.post('https://www.easy-mock.com/mock/5abbb60dbbba3f31b063e510/api/getReserveDetail', {
      id: id,
    });
  },
};

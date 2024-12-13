function reverseString(s) {
    try {
      s = s.split("").reverse().join("");
    } catch (e) {
      console.log(e.message);
      // body of catch
    } finally {
      console.log(s);
    }
  }

  reverseString('12345');
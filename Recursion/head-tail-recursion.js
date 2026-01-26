//head recursion

function head(n) {
    if (n === 0) return;
    head(n - 1);          // recursive call first
    console.log(n);      // work after call
}

head(5);


//flow chart of head recursion
// head(5)
//  → head(4)
//    → head(3)
//      → head(2)
//        → head(1)
//          → head(0)
//          print 1
//        print 2
//      print 3
//    print 4
//  print 5


//tail recursion

function tail(n) {
    if (n === 0) return;
    console.log(n);      // work first
    tail(n - 1);         // recursive call last
}

tail(5);


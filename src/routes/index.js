const router = require('express').Router();
const passport = require('passport');

router.get('/', (req, res, next) => {
    res.render('index');
});

router.get('/index', (req, res, next) => {
    res.render('index');
});

router.get('/polos', (req, res, next) => {
    res.render('polos');
});
router.get('/form', (req, res, next) => {
    res.render('form');
});
router.get('/Nosotros', (req, res, next) => {
    res.render('Nosotros');
});

router.get('/principal', (req, res, next) => {
    res.render('index');
});

router.get('/signup', (req, res, next) => {
    res.render('signup');
});

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    passReqToCallback: true
}));

router.get('/signin', (req, res, next) => {
    res.render('signin');
});


router.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/profile',
    failureRedirect: '/signin',
    passReqToCallback: true
}));

router.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/');
});

router.use((req, res, next) => {
    isAuthenticated(req, res, next);
    next();
});

router.get('/profile', isAuthenticated, (req, res, next) => {
    res.render('profile');
});
router.get('/Nosotros', isAuthenticated, (req, res, next) => {
    res.render('Nosotros');
});
router.get('/form', isAuthenticated, (req, res, next) => {
    res.render('form');
});
router.get('/polos', isAuthenticated, (req, res, next) => {
    res.render('polos');
});

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect('/')
}

module.exports = router;
describe('WebdriverIO and Appium, when interacting with a login form,', () => {
    beforeEach(() => {
        // TabBar.waitForTabBarShown(true);
        // TabBar.openLogin();
        // LoginScreen.waitForIsShown(true);
    });

    it('should be able click successfully', () => {
        console.log('da vao');
        const xpath = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.LinearLayout/androidx.viewpager.widget.ViewPager/android.widget.RelativeLayout/android.widget.LinearLayout/androidx.viewpager.widget.ViewPager/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.RelativeLayout/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.ImageView';
        $(xpath).click();
        $('~Home').waitForDisplayed(1000);
    });
});

describe('GAPO', () => {
    beforeEach(() => {
        // TabBar.waitForTabBarShown(true);
        // TabBar.openLogin();
        // LoginScreen.waitForIsShown(true);
    });

    it('Chat', () => {
        const chatXpath = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[3]/android.widget.ImageView';
        const firstUserXpath = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.LinearLayout/androidx.viewpager.widget.ViewPager/android.view.ViewGroup/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[1]/android.view.ViewGroup';
        const firstChatField = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.view.ViewGroup/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.EditText';
        const sendButtonXpath = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.view.ViewGroup/android.widget.LinearLayout/android.widget.ImageView';
        const backXpath = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout[1]/android.widget.ImageView[1]';
        const from = {
            x: 100,
            y: 650,
        };
        const to = {
            x: 100,
            y: 100,
        };

        $(chatXpath).click();

        let i = 0;
        while (i < 1000) {
            i++;

            $(firstUserXpath).click();

            let time = 0;
            while (time < 10) {
                time++;
                $(firstChatField).click();
                $(firstChatField).setValue('2');
                $(sendButtonXpath).click();
            }

            $(backXpath).click();

            // scroll
            driver.touchPerform([{
                action: 'press',
                options: from,
            }, {
                action: 'wait',
                options: { ms: 1000 },
            }, {
                action: 'moveTo',
                options: to,
            }, {
                action: 'release',
            }]);
            driver.pause(1000);
        }

        driver.setImplicitTimeout(5000);
    });
});

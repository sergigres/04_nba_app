import React from 'react';
import NewsSlider from '../../../widgets/newsSlider/slider'
import NewsList from '../../../widgets/newsList/newsList';

const NewsMain = () => (
  <div>
    <NewsSlider type="featured" start={0} amount={3} settings={{ dots: false }}/>
    <NewsList type="cardMain" title={false} loadmore={true} start={0} amount={5} />
  </div>
)

export default NewsMain;

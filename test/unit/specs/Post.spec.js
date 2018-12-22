import Vue from 'vue'
import Post from '../../../src/theme/Post.vue'

describe('Post', () => {
  it('should render the link', () => {
    const PostConstructor = Vue.extent(Post)
    const comp = new PostConstructor({
      propsData: {
        link: 'http://www.plurasight.com'
      }
    }).$mount()
    console.log(comp)
  })
})

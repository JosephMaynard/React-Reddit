import React, { Component } from 'react';
import './Post.css';
import CloseBtn from './CloseBtn.svg';
import PreviewBtn from './PreviewBtn.svg';
import PostText from './PostText';

class Post extends Component {

  constructor(props, context) {
    super(props, context);
    this.showPreviewToggle = this.showPreviewToggle.bind(this);
    this.createMarkup = this.createMarkup.bind(this);
    this.createThumbnail = this.createThumbnail.bind(this);

    this.state = {
      showPreview: false,
      showPreviewButtonDisabled: false,
      preview: '',
    };
  }

  componentWillMount() {
    const { data } = this.props;
    if (data.selftext_html && data.selftext_html !== '') {
      this.setState({
        preview: data.selftext_html,
      });
    } else if (data.selftext && data.selftext !== '') {
      this.setState({
        preview: data.selftext,
      });
    } else if (data.secure_media_embed && Object.keys(data.secure_media_embed).length > 0) {
      this.setState({
        preview: data.secure_media_embed.content,
      });
    } else if (data.preview
                && data.preview.images[0].variants.gif
                && data.preview.images[0].variants.gif.source.url !== ''
                && Object.keys(data.preview.images[0].variants.gif.source.url).length > 0) {
      this.setState({
        preview: `<img src="${data.preview.images[0].variants.gif.source.url}" />`,
      });
    } else if (data.preview
                && data.preview.images
                && data.preview.images[0].source.url !== ''
                && Object.keys(data.preview.images[0].source.url).length > 0) {
      this.setState({
        preview: `<img src="${data.preview.images[0].source.url}" />`,
      });
    } else {
      this.setState({
        showPreviewButtonDisabled: true,
      });
    }
  }

  createThumbnail() {
    const { data } = this.props;
    if (data.over_18) {
      return (<span>NSFW</span>);
    } else if (data.thumbnail && data.thumbnail !== 'self' && data.thumbnail !== 'default') {
      return (<img src={data.thumbnail} alt={data.title} />);
    }
    return (<p>{data.subreddit.substr(0, 1).toUpperCase()}</p>);
  }

  createMarkup() {
    return { __html: this.state.preview };
  }

  showPreviewToggle() {
    this.setState({
      showPreview: !this.state.showPreview,
    });
  }

  render() {
    const { data } = this.props;
    // console.log(data);

    return (
      <div className="Post">
        <div
          className="thumbnail"
          style={{ background: `#${Math.floor(Math.random() * 16777215).toString(16)}` }}
        >
          { this.createThumbnail() }
        </div>
        <PostText
          url={data.url}
          title={data.title}
          domain={data.domain}
          subreddit={data.subreddit}
          submitted={Math.round(((new Date()).getTime() - (parseInt(data.created_utc, 10) * 1000)) / 3600000)}
          ups={data.ups}
          permalink={data.permalink}
          comments={data.num_comments}
          author={data.author}
        />
        <img
          className="PreviewBtn"
          onClick={this.showPreviewToggle}
          src={
            this.state.showPreview
            ? CloseBtn
            : PreviewBtn
          }
          alt="Preview"
        />
        {this.state.showPreview
          ? (<div className="preview" dangerouslySetInnerHTML={this.createMarkup()} />)
          : null
        }
      </div>
    );
  }
}

Post.proptypes = {
  data: React.PropTypes.object.isRequired,
};

export default Post;

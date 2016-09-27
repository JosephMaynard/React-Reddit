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

    this.state = {
      showPreview: false,
      showPreviewButtonDisabled: false,
      preview: '',
    };
  }

  componentDidMount() {
    if (this.props.data.selftext_html && this.props.data.selftext_html !== '') {
      this.setState ({
        preview: this.props.data.selftext_html,
      });
    } else if (this.props.data.selftext && this.props.data.selftext !== '') {
      this.setState ({
        preview: this.props.data.selftext,
      });
    } else if (this.props.data.secure_media_embed && Object.keys(this.props.data.secure_media_embed).length > 0) {
      this.setState ({
        preview: this.props.data.secure_media_embed.content,
      });
    } else if (this.props.data.preview && this.props.data.preview.images[0].variants.gif && this.props.data.preview.images[0].variants.gif.source.url !== '' && Object.keys(this.props.data.preview.images[0].variants.gif.source.url).length > 0) {
      this.setState ({
        preview: `<img src="${ this.props.data.preview.images[0].variants.gif.source.url }" />`,
      });
    } else if (this.props.data.preview && this.props.data.preview.images  && this.props.data.preview.images[0].source.url !== '' && Object.keys(this.props.data.preview.images[0].source.url).length > 0) {
      this.setState ({
        preview: `<img src="${ this.props.data.preview.images[0].source.url }" />`,
      });
    } else {
      this.setState ({
        showPreviewButtonDisabled: true,
      });
    }
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
    return (
      <div className="Post">
        <div className="thumbnail" style={ {'background': '#' + Math.floor(Math.random()*16777215).toString(16)} }>
          { this.props.data.thumbnail && this.props.data.thumbnail !== 'self' && this.props.data.thumbnail !== 'default'
            ? <img src={this.props.data.thumbnail} alt={this.props.data.title} />
            : <p>{this.props.data.subreddit.substr(0,1).toUpperCase()}</p>
          }
        </div>
        <PostText
          url={this.props.data.url}
          title={this.props.data.title}
          domain={this.props.data.domain}
          subreddit={this.props.data.subreddit}
          submitted={Math.round(((new Date()).getTime() - (parseInt(this.props.data.created_utc, 10) * 1000)) / 3600000)}
          ups={this.props.data.ups}
          permalink={this.props.data.permalink}
          comments={this.props.data.num_comments}
          author={this.props.data.author}
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

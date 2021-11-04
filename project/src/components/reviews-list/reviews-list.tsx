import { useState } from 'react';
import ReviewsItem from '../reviews-item/reviews-item';

function ReviewsList(): JSX.Element {
  type commentType = {
    text: string;
    rating: string;
    date: string;
  };

  const [comments, setComments] = useState<commentType[] | []>([]);

  const [comment, setComment] = useState<commentType>({
    text: '',
    rating: '',
    date: '',
  });

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    comment.date = getCurrentDate();
    setComments((prev) => [...prev, comment]);
    setComment({text: '', rating: '', date: ''});
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    event.persist();
    const {value, type} = event.target;

    if (type === 'radio') {
      setComment((prev) => ({...prev, rating: value}));
    } else {
      setComment((prev) => ({...prev, text: value}));
    }
  };

  const getCurrentDate = () => {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'];
    const today = new Date();
    return (`${monthNames[today.getMonth()]} ${today.getFullYear()}`);
  };

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {comments.map((elem, id) => {
          const keyValue = `${id}-${elem}`;
          return (
            <ReviewsItem
              key={keyValue}
              rating={elem.rating}
              text={elem.text}
              date={elem.date}
            />
          );
        })}
      </ul>
      <form
        className="reviews__form form"
        action="#"
        method="post"
        onSubmit={onSubmit}
      >
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value="5"
            id="5-stars"
            type="radio"
            checked={comment.rating === '5'}
            onChange={onChange}
          />
          <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value="4"
            id="4-stars"
            type="radio"
            checked={comment.rating === '4'}
            onChange={onChange}
          />
          <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value="3"
            id="3-stars"
            type="radio"
            checked={comment.rating === '3'}
            onChange={onChange}
          />
          <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value="2"
            id="2-stars"
            type="radio"
            checked={comment.rating === '2'}
            onChange={onChange}
          />
          <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value="1"
            id="1-star"
            type="radio"
            checked={comment.rating === '1'}
            onChange={onChange}
          />
          <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </div>
        <textarea
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          value={comment.text}
          onChange={onChange}
        >
        </textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button
            className="reviews__submit form__submit button"
            type="submit"
            disabled={!(comment.rating !== '' && comment.text.length >= 50)}
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default ReviewsList;

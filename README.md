# VIDEO VERTEX

## Requirement Clearification

- Features to be developed
- Tech Stack you will choose (React + Redux + ReactRouterDom Tailwind)
- (Justification of why you are choosing these techs)
- Bundler (webpack or parcel or vite)
- jest testing library for testing

## Planning

- Layout of your project

## Higher Order Function

- When you want to do little modifications to one component we use HOC.
  `HOC is a component which returns another component.`

## Debouncing:

Typing Slow = 200ms
Typing Fast = 30ms

Debouncing with 200ms

- if difference between 2 key strokes is less than 200ms - DECLINE API call
- 200ms make an API call

```javasrcipt
  useEffect(() => {
    // Make an api call after evey key press
    //  But if the difference between 2 API calls is <200ms
    //  Decline the API call
    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
      /**
       * useEffect(() => {
      // This effect runs when the component mounts and whenever searchQuery changes
      return () => {
      // This cleanup function is called when the component unmounts
      // and also when searchQuery changes and the effect is re-run
  };
}, [searchQuery]);
       */
    };
  }, [searchQuery]);

  /**
   * key - f
   * - render the component
   * - useEffect();
   * - start timer => make call after 200ms
   *
   * key - fi
   * - destroy the component (useEffect return method)
   * - re-render the component
   * - useEffect()
   * - start timer => make api call after 200ms
   *
   * setTimeout(200) - make an api call
   *
   *
   *
When a component unmounts, it means that it's being removed from the DOM, and it may no longer be relevant or needed. However, any pending timers created within that component's useEffect might still be active.

If the timer were not cleared when the component unmounts, there would be a reference to the timer even after the component is gone. This can lead to issues because the timer might try to execute code or update state on a component that no longer exists, potentially causing errors or unexpected behavior.

By clearing the timer in the return function of useEffect, you ensure that the timer is canceled when the component is unmounted, preventing any unwanted side effects and keeping your application clean and predictable.s
   */
```

## Performance:

## Challenges of Live chat

- get data live
- update the UI live

---

- LIVE DATA HANDLING -> 1) web sockets 2) API Polling

  - web sockets

    - there is handshake between ui and server.
    - its two way communication you can send data from ui to server and server to ui
    - there is no regular interveral one data can come after 200ms and another may come after 10sec.
    - its used when order of data matters and data should come quickly
    - its used when order of data matters
    - eg: chatapps, zerodha(treding apps, stock market)

  - API Polling
    - data flow in unidirectional (server to ui)
    - there is regular interval at which data is comming.
    - its used when data fetching at regular interval can give user realtime experience.
    - eg: crickbuzz, Gmail

![image](https://github.com/MazharSolkar/akshay-react-course/assets/86589812/92e6814c-2541-4dd2-9ee5-7a9c1a02c2f4)

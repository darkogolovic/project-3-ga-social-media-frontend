
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import postService from "../services/postService";


export const useInfinitePosts = () => {
  return useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: async ({ pageParam = 1 }) =>
      await postService.getAllPosts(pageParam),
    getNextPageParam: (lastPage) => {
      if (!lastPage.hasMore) return undefined;
      return lastPage.nextPage;
    },
  });
};


export const usePost = (id) => {
  return useQuery({
    queryKey: ["post", id],
    queryFn: () => postService.getPost(id),
    enabled: !!id,
  });
};


export const useCreatePost = () => {
  const qc = useQueryClient();
  
  return useMutation({
    mutationFn: postService.createPost,
    onSuccess: () => {
      qc.invalidateQueries(["posts"]);
    },
  });
};


export const useUpdatePost = (id) => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (data) => postService.updatePost(id, data),
    onSuccess: () => {
      qc.invalidateQueries(["posts"]);
      qc.invalidateQueries(["post", id]);
    },
  });
};


export const useDeletePost = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (id) => postService.deletePost(id),
    onSuccess: () => {
      qc.invalidateQueries(["posts"]);
    },
  });
};


export const useLikePost = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (id) => postService.likePost(id),
    onSuccess: () => {
      qc.invalidateQueries(["posts"]);
    },
  });
};


export const useAddComment = (postId) => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (data) => postService.addComment(postId, data),
    onSuccess: () => {
      qc.invalidateQueries(["post", postId]);
      qc.invalidateQueries(["posts"]);
    },
  });
};


export const useEditComment = (postId, commentId) => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (data) => postService.editComment(postId, commentId, data),
    onSuccess: () => {
      qc.invalidateQueries(["post", postId]);
    },
  });
};


export const useDeleteComment = (postId) => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (commentId) => postService.deleteComment(postId, commentId),
    onSuccess: () => {
      qc.invalidateQueries(["post", postId]);
    },
  });
};

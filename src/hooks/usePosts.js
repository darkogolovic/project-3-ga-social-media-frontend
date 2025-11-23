
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


export const useUpdatePost = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) => postService.updatePost(id, data),
    onSuccess: (_, variables) => {
      qc.invalidateQueries(["posts"]);
      qc.invalidateQueries(["post", variables.id]);
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
 export const useGetComments = (postId) => {
  return useQuery({
    queryKey: ["comments", postId],
    enabled: !!postId,
    queryFn: () => postService.getComments(postId),
  });
};


export const useAddComment = (postId) => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (data) => postService.addComment(postId, data),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["comments", postId] });
    },
  });
};


export const useEditComment = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: ({ postId, commentId, data }) =>
      postService.editComment(postId, commentId, data),
    onSuccess: (_, variables) => {
      qc.invalidateQueries({ queryKey: ["comments", variables.postId] });
    },
  });
};


export const useDeleteComment = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: ({ postId, commentId }) =>
      postService.deleteComment(postId, commentId),
    onSuccess: (_, variables) => {
      qc.invalidateQueries({ queryKey: ["comments", variables.postId] });
    },
  });
};


